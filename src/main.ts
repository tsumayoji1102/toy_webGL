// 基本的なWebGLセットアップ
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const gl = canvas.getContext('webgl');
if (!gl) {
    throw new Error('WebGL not supported');
}

// 背景を青色に設定
gl.clearColor(0.0, 0.0, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
