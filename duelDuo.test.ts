
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe('"Draw" Button Tests', () => {
    test('Div id of "choices" is not displayed before clicking "Draw" button', async () => {
        const choices = await driver.findElement(By.id('choices'))
        const displayed = await choices.isDisplayed()
        expect(displayed).toBe(false)
    })
    test('Div id of "choices" is displayed after clicking "Draw" button', async () => {
        await driver.findElement(By.id('draw')).click()
        const choices = await driver.findElement(By.id('choices'))
        const displayed = await choices.isDisplayed()
        expect(displayed).toBe(true)
    })
})

describe('"See All Bots" Button Tests', () => {
    test('Div "see-all" not displayed before click', async () => {
        const seeAll = await driver.findElement(By.id('all-bots'))
        const displayed = await seeAll.isDisplayed()
        expect(displayed).toBe(false)
    })
    test('Div "see-all" displayed after click', async () => {
        await driver.findElement(By.id('see-all')).click()
        const seeAll = await driver.findElement(By.id('all-bots'))
        const displayed = await seeAll.isDisplayed()
        expect(displayed).toBe(true)
    })
})

// describe('Wins counter and losses counter are functional', () => {
//     //this one will be tricky, lots of navigation, and conditionals
// })

