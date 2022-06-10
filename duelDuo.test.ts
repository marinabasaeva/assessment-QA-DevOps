
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)

})

test('clicking the Draw button displays the div with id = “choices”', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const choicesDisplayed = await choices.isDisplayed()
    expect(choicesDisplayed).toBe(true)
    await driver.sleep(5000)
})

test('clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const playerDuoDisplayed = await playerDuo.isDisplayed()
    expect (playerDuoDisplayed).toBeTruthy
})
