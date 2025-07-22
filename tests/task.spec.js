const{test,chromium,expect}=require('@playwright/test')

test('task 1',async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder('Username').fill('problem_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button')
    await page.mouse.wheel(0,500)
    await page.click("//div[@id='inventory_container']/descendant::div[50]/following-sibling::button")
    await page.mouse.wheel(0,-500)
    await page.click("#shopping_cart_container")
    await page.click("//div[@class='cart_footer']/child::a/following-sibling::a")
   // await page.locator('#first-name').fill('Anand')
    await page.getByPlaceholder('Last Name').fill('S')
    await page.fill('#postal-code','600001')
    await page.click("//*[@id='checkout_info_container']/div/form/div[2]/input")
    await page.click("//*[@id='checkout_summary_container']/div/div[2]/div[8]/a[2]")
    await page.screenshot({path:'C:/Playwright class/tests/images/'+'lastpage.png'})


    await page.waitForTimeout(3000)
})