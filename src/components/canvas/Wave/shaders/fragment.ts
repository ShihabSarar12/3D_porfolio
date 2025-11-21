const waveFragmentShader: string = /*glsl*/ `
precision mediump float;

uniform vec3 uSurfaceColor;
uniform vec3 uDeepColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

uniform float uCameraY;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3  uUnderwaterColor;

uniform vec3  uDeepUnderwaterColor;
uniform vec3  uWaterFogColor;
uniform float uMaxDarkDepth;

varying float vElevation;
varying float vWorldY;

void main(){
    float mixedStrength = (vElevation + uColorOffset) * uColorMultiplier;
    vec3 baseColor = mix(uDeepColor, uSurfaceColor, mixedStrength);

    float depthFrag = max(vWorldY - uCameraY, 0.0);
    float fade = smoothstep(uFadeStart, uFadeEnd, depthFrag);
    vec3 color = mix(baseColor, uUnderwaterColor, fade);
    float alpha = 1.0 - fade;

    float camBelow = max(0.0, 0.0 - uCameraY);
    float darkK = clamp(camBelow / max(uMaxDarkDepth, 0.0001), 0.0, 1.0);

    color = mix(color, uDeepUnderwaterColor, darkK * 0.85 * fade);

    float fogK = smoothstep(0.0, uMaxDarkDepth, camBelow);
    color = mix(color, uWaterFogColor, fogK * 0.5 * fade);

    color = max(color, vec3(0.03));

    gl_FragColor = vec4(color, alpha);
}
`;
export default waveFragmentShader;
