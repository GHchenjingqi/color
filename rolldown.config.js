export default {
  input: 'src/index.js',
  output: [
    // ESM 格式
    {
      file: 'dist/china-colors.esm.js',
      format: 'esm',
      exports: 'default'
    },
    // CommonJS 格式
    {
      file: 'dist/china-colors.cjs.js',
      format: 'cjs',
      exports: 'auto'
    },
    // IIFE 格式
    {
      file: 'dist/china-colors.min.js',
      format: 'iife',
      name: 'ChinaColors',
      globals: {}, // 如果有外部依赖在这里声明
      plugins: []  // 可以添加压缩插件
    }
  ],
  // 确保不会错误处理浏览器API
  context: 'window',
  // 外部依赖声明
  external: [],
  // 启用摇树优化
  treeshake: true,
  // 错误处理
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  }
};