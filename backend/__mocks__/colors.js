const colors = jest.createMockFromModule('colors')

const unity = s => s

colors.blue = unity
colors.red = unity
colors.yellow = unity

module.exports = colors