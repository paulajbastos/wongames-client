module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    //dizer para os modulos usar como local padrao o src (process.cwd() = raiz)
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
