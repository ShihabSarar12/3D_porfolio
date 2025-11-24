const isWebGLUsable = () => {
    try {
        const canvas = document.createElement('canvas');

        if (!window.WebGLRenderingContext) return false;

        const gl =
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl');

        if (!gl) return false;
        return true;
    } catch {
        return false;
    }
};

export default isWebGLUsable;
