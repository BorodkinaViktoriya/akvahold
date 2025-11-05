module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            stage: 1,
            features: { 'nesting-rules': true },
            autoprefixer: { grid: true },
        },
        // Минификация только в продакшне
        cssnano: process.env.NODE_ENV === 'production' ? {} : false,
    },
};