const underwaterFragmentShader = /* glsl */ `
precision mediump float;

uniform float uCameraY;       // camera vertical position
uniform float uSurfaceY;      // world Y of the wave surface
uniform float uFadeStart;     // start fading below surface
uniform float uFadeEnd;       // fully visible below surface
uniform float uMaxDarkDepth;  // max darkening depth

uniform vec3 uTopColor;       // near-surface bright blue
uniform vec3 uBottomColor;    // mid-depth blue
uniform vec3 uDarkColor;      // deep ocean dark blue

varying vec3 vWorldPos;

void main() {
    // how far the camera is below the water surface
    float below = max(0.0, uSurfaceY - uCameraY);

    // alpha transitions smoothly once camera goes below surface
    float alpha = smoothstep(uFadeStart, uFadeEnd, below);

    // height-based gradient coloring
    float h = clamp((vWorldPos.y + 15.0) / 30.0, 0.0, 1.0);
    vec3 grad = mix(uBottomColor, uTopColor, pow(h, 1.5));

    // deeper = darker based on how far below camera is
    float darkFactor = smoothstep(0.0, uMaxDarkDepth, below);
    vec3 deepColor = mix(grad, uDarkColor, darkFactor);

    // subtle wave tinting
    float wave = sin(vWorldPos.x * 0.1 + vWorldPos.z * 0.1 + vWorldPos.y * 0.05);
    wave = (wave + 1.0) * 0.5;
    vec3 waveTint = mix(deepColor, uTopColor * 1.1, wave * 0.15);

    // light attenuation with depth
    float depthAtten = exp(-below * 0.25);
    vec3 finalColor = mix(uDarkColor, waveTint, depthAtten);

    gl_FragColor = vec4(finalColor, alpha);
}
`;

export default underwaterFragmentShader;
