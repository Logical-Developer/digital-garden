---
title: رفع خطا NSIS ERROR
aliases: 
date: 2024-09-30
draft: false
status: 🌿درختچه
parent: 
hierarchy: 
image: 
tags:
  - win
description: آموزش رفع خطا NSIS ERROR در ویندوز زمان نصب برنامه
---


زمانی که میخواهید در محیط ویندوز برنامه ای را نصب کنید، ممکن هست پیغام خطا با عنوان NSIS ERROR مواجه بشوید، ساده ترین راه حل استفاده از سوییچ ncrc در زمان نصب از طریق Command Prompt می‏‎‌باشد.

**مراحل نصب:**
1. فایل Setup در پوشه ای که حروف فارسی ندارد قرار بدهید، پیشنهاد میکنم در برای راحتی در Root درایو D یا E قرار بدهید.
2. یک CMD باز کنید
3. فایل را با Drag & Drop به داخل CMD بیندازید، با این کار آدرس فایل نصبی در کامند پرامپت نوشته میشود.
4. پس از آدرس فایل یک فاصله بیندازید و عبارت زیر را نصب کنید:
```
:ncrc/
```

5. با زدن کلید Enter صبر کنید تا مراحل نصب آغاز شود.

البته راه‌ حل های دیگه برای رفع این خطا هست که به نسبت طولانی و پر دردسر تر هست.

🎞 مشاهده فیلم آموزشی از کانال آپارات هایپر سورس: 

<div style="text-align: center;">
<button 
	style="	background-color: black; color: white; padding: 8px 20px; border: none; border-radius: 10px; cursor: pointer; transition: background-color 0.3s ease;"	onclick="location.href='https://www.aparat.com/v/h994wx5';">
     مشاهده ویدئو
</button>
</div>


راه حل های دیگر:
1. سایت پرسش و پاسخ ماکروسافت:  [لینک مطلب](https://answers.microsoft.com/en-us/windows/forum/all/nsis-error-launching-installer-but-i-am-not/a0d7b921-2a65-4260-8758-c078fc2de7a0)

```
It could be a third-party app that is trying to update. There are some options that you can try to identify which app is triggering this error message.

Option 1: Using the Task Manager
1-When you see the error message don't close it
2-Press Ctrl+Shift+ Esc to open the Task Manager
3-Search for "NSIS", "NSIS installer", or " NSIS (Nullsoft Scriptable Install System) "
4-Right-click on it and select the option "Open file location"
5-Then you should be able to identify which app is trying to update. If you don't use the app you can uninstall it or go to the developer website and download and install the latest version

Option 2: Performing a clean boot. You can see at this link how to perform a clean boot. If the error message stops in the clean boot, check the section "How to determine what is causing the problem after you do a clean boot" to see how to identify which app is causing the problem.

Option 3: Using the Task Scheduler
1-When you see the error message don't close it
2-Click on Start, search for Task Scheduler and click on that
3-Click on "Task Scheduler Library" in the left panel
4-Then search in the list which task has the status "Running"
5-Then click on the task to see the description and identify which app is trying to update

If you have problems identifying which app is triggering the error message, attach a screenshot of the error message, a screenshot of the Task Manager, and a screenshot of the file location of the app.
```


*پاورقی:*

<div dir="ltr">

- NSIS (Nullsoft Scriptable Install System)

- Nsis error - Error launching installer

<div>



