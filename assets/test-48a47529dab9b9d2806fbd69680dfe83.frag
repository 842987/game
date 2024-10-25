#ifdef GL_ES
precision mediump float;
#endif
uniform sampler2D u_texture;
varying vec4 v_color;
varying vec2 v_texCoord;
//const float smoothing = 1.0/16.0;
void main() {
    //    float distance = texture2D(u_texture, v_texCoord).a;
    //    float alpha = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);
    //    gl_FragColor = vec4(v_color.rgb, v_color.a * alpha);

    gl_FragColor = v_color * texture2D(u_texture, v_texCoord);
    if (gl_FragColor.a > 0.0f) {
        gl_FragColor.a = 1.0f;
    }

    //    if (gl_FragColor.a == 0.0f) {
    //        gl_FragColor = vec4(0.0f, 1.0, 1.0f, 1.0f);
    //    }
}
