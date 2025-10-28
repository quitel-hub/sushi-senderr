"use client";

import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
varying vec2 vUv;
uniform float time;
uniform vec4 resolution;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;
uniform float time;
uniform vec4 resolution;

float PI = 3.141592653589793238;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
    mat4 m = rotationMatrix(axis, angle);
    return (m * vec4(v, 1.0)).xyz;
}

float smin( float a, float b, float k ) {
    k *= 6.0;
    float h = max( k-abs(a-b), 0.0 )/k;
    return min(a,b) - h*h*h*k*(1.0/6.0);
}

float sphereSDF(vec3 p, float r) {
    return length(p) - r;
}

float easeInOut(float t) {
    return t * t * (3.0 - 2.0 * t);
}

float sdf(vec3 p) {
    float disperseDuration = 12.0;
    float holdApartDuration = 12.0;
    float gatherDuration = 14.0;
    float holdTogetherDuration = 6.0;
    float totalDuration = disperseDuration + holdApartDuration + gatherDuration + holdTogetherDuration;
    float phase = mod(time, totalDuration);

    float separate = 0.0;
    if (phase < disperseDuration) {
        separate = easeInOut(phase / disperseDuration);
    } else if (phase < disperseDuration + holdApartDuration) {
        separate = 1.0;
    } else if (phase < disperseDuration + holdApartDuration + gatherDuration) {
        float gatherPhase = (phase - disperseDuration - holdApartDuration) / gatherDuration;
        separate = easeInOut(1.0 - gatherPhase);
    } else {
        separate = 0.0;
    }

    float wobble = 0.05 * sin(time * 0.6) + 0.035 * sin(time * 1.1);
    vec3 swirlP = rotate(p, vec3(0.0, 0.0, 1.0), time / 4.5);
    vec3 driftP = rotate(p, vec3(1.0, 0.0, 0.0), time / 5.2);

    vec3 gatherTargets[5];
    gatherTargets[0] = vec3(-0.28, 0.1, 0.0);
    gatherTargets[1] = vec3(-0.18, -0.12, 0.0);
    gatherTargets[2] = vec3(0.14, 0.14, 0.0);
    gatherTargets[3] = vec3(0.26, -0.08, 0.0);
    gatherTargets[4] = vec3(0.02, -0.02, 0.0);

    vec3 triTargets[5];
    triTargets[0] = vec3(-0.42, 0.26, 0.0);
    triTargets[1] = vec3(-0.18, -0.28, 0.0);
    triTargets[2] = vec3(0.18, 0.3, 0.0);
    triTargets[3] = vec3(0.52, -0.12, 0.0);
    triTargets[4] = vec3(0.08, -0.42, 0.0);

    vec3 spreadTargets[5];
    spreadTargets[0] = vec3(-0.64, 0.34, 0.0);
    spreadTargets[1] = vec3(-0.22, -0.44, 0.0);
    spreadTargets[2] = vec3(0.32, 0.36, 0.0);
    spreadTargets[3] = vec3(0.72, -0.16, 0.0);
    spreadTargets[4] = vec3(0.24, -0.56, 0.0);

    vec3 wobbleDirs[5];
    wobbleDirs[0] = vec3(0.14 * sin(time * 0.72), 0.1 * cos(time * 0.52), 0.0);
    wobbleDirs[1] = vec3(0.12 * sin(time * 0.58 + 1.1), 0.07 * cos(time * 0.88 + 0.6), 0.0);
    wobbleDirs[2] = vec3(0.1 * cos(time * 0.66 + 2.1), 0.08 * sin(time * 0.6 + 1.7), 0.0);
    wobbleDirs[3] = vec3(0.12 * sin(time * 0.52 + 0.9), 0.08 * cos(time * 0.8 + 1.2), 0.0);
    wobbleDirs[4] = vec3(0.1 * sin(time * 0.6 + 2.4), 0.09 * cos(time * 0.72 + 1.4), 0.0);

    float clusterCycle = 0.5 + 0.5 * sin(time * 0.16);

    float radii[5];
    radii[0] = 0.26 + wobble * 0.6;
    radii[1] = 0.23 + wobble * 0.5;
    radii[2] = 0.2 + wobble * 0.42;
    radii[3] = 0.22 + wobble * 0.4;
    radii[4] = 0.2 + wobble * 0.36;

    vec3 centers[5];
    for (int i = 0; i < 5; i++) {
        vec3 base = mix(gatherTargets[i], triTargets[i], clusterCycle);
        vec3 target = mix(base, spreadTargets[i], separate);
        target += wobbleDirs[i] * (0.24 + 0.2 * separate);
        centers[i] = target;
    }

    float k = mix(0.12, 0.05, separate);

    float field = sphereSDF(swirlP - centers[0], radii[0]);
    for (int i = 1; i < 5; i++) {
        float layer = sphereSDF(driftP - centers[i], radii[i]);
        field = smin(field, layer, k);
    }

    return field;
}

vec3 getNormal(vec3 p) {
    float d = 0.001;
    return normalize(vec3(
        sdf(p + vec3(d, 0.0, 0.0)) - sdf(p - vec3(d, 0.0, 0.0)),
        sdf(p + vec3(0.0, d, 0.0)) - sdf(p - vec3(0.0, d, 0.0)),
        sdf(p + vec3(0.0, 0.0, d)) - sdf(p - vec3(0.0, 0.0, d))
    ));
}

float rayMarch(vec3 rayOrigin, vec3 ray) {
    float t = 0.0;
    for (int i = 0; i < 100; i++) {
        vec3 p = rayOrigin + ray * t;
        float d = sdf(p);
        if (d < 0.001) return t;
        t += d;
        if (t > 100.0) break;
    }
    return -1.0;
}

void main() {
    vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
    vec3 cameraPos = vec3(0.0, 0.0, 5.0);
    vec3 ray = normalize(vec3((vUv - vec2(0.5)) * resolution.zw, -1));

    vec3 deep = vec3(0.01, 0.08, 0.16);
    vec3 mid = vec3(0.05, 0.24, 0.44);
    vec3 glow = vec3(0.32, 0.78, 0.92);
    float gradient = smoothstep(-0.1, 1.1, vUv.y + 0.06 * sin(time * 0.32 + vUv.x * 3.6));
    vec3 background = mix(deep, mid, gradient);
    background += 0.05 * sin(time * 0.6 + vUv.x * 6.0) * vec3(0.05, 0.14, 0.24);

    float t = rayMarch(cameraPos, ray);
    if (t > 0.0) {
        vec3 p = cameraPos + ray * t;
        vec3 normal = getNormal(p);
        float fresnel = pow(1.0 - dot(ray, normal), 2.0);
        float pulse = 0.4 + 0.32 * sin(time * 0.82 + p.x * 2.8 + p.y * 2.2);
        float swirl = abs(sin((p.x + time * 0.52) * 4.8) * cos((p.y - time * 0.45) * 6.2));
        float seeds = smoothstep(0.66, 0.92, swirl);
        float layeredSeeds = seeds * (0.4 + 0.3 * sin(time * 0.9 + p.z * 3.5));
        vec3 highlight = mix(mid, glow, clamp(fresnel * 0.7 + pulse * 0.32, 0.0, 1.0));
        highlight += layeredSeeds * vec3(0.52, 0.94, 1.0);
        vec3 rim = mix(vec3(0.05, 0.12, 0.22), glow, fresnel);
        vec3 color = mix(background, highlight, mix(0.44, 0.62, layeredSeeds));
        color = mix(color, rim, clamp(fresnel + layeredSeeds * 0.3, 0.0, 1.0));
        gl_FragColor = vec4(color, 0.84 + layeredSeeds * 0.1);
    } else {
        vec3 haze = background + vec3(0.03, 0.06, 0.1) * sin(time * 0.4 + vUv.y * 4.2);
        gl_FragColor = vec4(haze, 0.55);
    }
}
`;

type LavaLampShaderMaterial = THREE.ShaderMaterial & {
  uniforms: {
    time: THREE.IUniform<number>;
    resolution: THREE.IUniform<THREE.Vector4>;
  };
};

function LavaLampShader() {
  const meshRef = useRef<THREE.Mesh<THREE.PlaneGeometry, LavaLampShaderMaterial> | null>(null);
  const { size } = useThree();

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    resolution: { value: new THREE.Vector4() },
  }), []);

  useEffect(() => {
    const { width, height } = size;
    const imageAspect = 1;
    let a1: number;
    let a2: number;

    if (height / width > imageAspect) {
      a1 = (width / height) * imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = (height / width) / imageAspect;
    }

    uniforms.resolution.value.set(width, height, a1, a2);
  }, [size, uniforms]);

  useFrame((state) => {
    uniforms.time.value = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = uniforms.time.value;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[5, 5]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        depthTest={false}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

interface LavaLampProps {
  className?: string;
}

export function LavaLamp({ className }: LavaLampProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        "[mask-image:radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.92),rgba(255,255,255,0.4)_55%,rgba(255,255,255,0)_95%)]",
        className,
      )}
    >
      <Canvas
        className="size-full"
        linear
        camera={{
          left: -0.5,
          right: 0.5,
          top: 0.5,
          bottom: -0.5,
          near: -1000,
          far: 1000,
          position: [0, 0, 2],
        }}
        orthographic
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#003d7f"]} />
        <LavaLampShader />
      </Canvas>
    </div>
  );
}

export default LavaLamp;


