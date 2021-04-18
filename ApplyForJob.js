let puppeteer=require("puppeteer");
let fs=require("fs")

let job = process.argv[2];
(async function(){
    try{ let browserInstance=await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized",]
    })
    
    let newPage=await browserInstance.newPage();
    await newPage.setDefaultNavigationTimeout(0)
    await newPage.goto("https://www.google.com/",{waitUntil:"networkidle2"});
    await newPage.type(".gLFyf.gsfi",job,{delay:200})
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector(".N60dNb.mfMhoc",{visible:true})
    await newPage.click(".N60dNb.mfMhoc")
    await newPage.goto("https://in.linkedin.com/jobs/view/full-stack-developer-ui-with-c%23-sql-at-klaus-it-solutions-private-limited-2507232275?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",{waitUntil:"networkidle2"})
    await newPage.goto("https://www.monsterindia.com/seeker/single-page-registration?from=adzuna&spl=IN_adzuna&WT.mc_n=olm_sk_IN_adzuna&gd=1&jobid=27586449&action=apply&utm_campaign=Job_Boards&utm_medium=CPC&utm_source=adzuna&cmpid=1000-174",{visible:true})
    await newPage.waitForSelector('input[type=file]');
    const inputUploadHandle = await newPage.$('input[type=file]');
    let fileToUpload = 'C:\\Users\\shreya saxena\\Documents\\resume.txt';
    inputUploadHandle.uploadFile(fileToUpload);
    await newPage.type("input[placeholder='Enter your full name']","shreya saxena",{delay:200})
    await newPage.type("input[placeholder='Enter your Email Id']","shreya.saxena2@gmail.com",{delay:200})
    await newPage.type('#password',"Shreya@48",{delay:200})
    await newPage.type("input[placeholder='Mobile Number']","9771582739",{delay:200})
    await newPage.type("input[placeholder='Please select your current location']","Bareilly",{delay:200})
    await newPage.keyboard.press("Enter");
    await newPage.type("input[placeholder='Select experience']","Fresher",{delay:200})
    await newPage.keyboard.press("Enter");
    await newPage.type("input[placeholder='Enter or select your skills']",".Htaccess",{delay:200})
    await newPage.keyboard.press("Enter");
    await newPage.keyboard.press("Enter");
    await newPage.keyboard.press("Enter")
    await newPage.type("input[placeholder='Maximum 2 industries can be selected']","E Learning",{delay:200})
    await newPage.keyboard.press("Enter");
    await newPage.keyboard.press("Enter");
    await newPage.type("input[placeholder='Maximum 2 function can be selected']","IT",{delay:200})
    await newPage.keyboard.press("Enter");
    await newPage.keyboard.press("Enter");

    await newPage.click("#registerSubmit")
    // await newPage.waitForTimeOut(3000)
    await newPage.screenshot({path: 'screenshot.png', fullPage: true})

}
    catch(err)
    {
        console.log(err)
    }
}
)();

