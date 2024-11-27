import { test, expect } from '@appetize/playwright';
import playwright from "playwright";
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: "allure-playwright",
});


test.only("Home Page Test", async ({ session }) => {
  // check if the Logo is displayed
  await expect(session).toHaveElement({
    attributes: {
      class: 'android.widget.ImageView'
    }
  });
  // check if the header is displayed
  await expect(session).toHaveElement({
    attributes: {
      text: "My BBC",
      class: "android.widget.TextView"
    }
  });

  // check if Breaking News button is displayed
  await expect(session).toHaveElement({
    attributes: {
      text: 'Breaking News'
    }
  });

  // Click on Topic picker
  await session.tap({
    element: {
      attributes: {
        text: 'Politics'
      }
    }
  });
  
  // Click on TV Guide topic
  await session.tap({
    element: {
      attributes: {
        text: "TV Guide",
        class: "android.widget.TextView"
      }
    }
  });
  // Click on "Go to TV Guide"
  await session.tap({
    element: {
      attributes: {
        text: "Go to TV Guide ",
        class: "android.widget.TextView"
      }
    }
  });
  
  // Click on "Go to TV Guide"
  await session.tap({
    element: {
      attributes: {
        text: "Go to TV Guide ",
        class: "android.widget.TextView"
      }
    }
  });
  // Click on Yes on Do you have TV License
  await session.tap({
    element: {
      attributes: {
        text: "Yes",
        class: "android.widget.TextView"
      }
    }
  });

  // verify if it landed on TV Guide page
  await expect(session).toHaveElement({
    attributes: {
      text: "TV Guide",
      class: "android.widget.TextView"
    }
  });

  // Click on back arrow
   await session.tap({
    element: {
      attributes: {
        class: "android.widget.Button"
      }
    }
  });

  // verify if it is home page
  await expect(session).toHaveElement({
    attributes: {
      text: 'Breaking News'
    }
  });
// check if the header is displayed
await expect(session).toHaveElement({
  attributes: {
    text: "My BBC",
    class: "android.widget.TextView"
  }
});
console.log(" Verified that Choosing 'TV Guide' topic from the Topic picker and select 'Yes' in the alert ,user will navigate to TV Guide Page and can navigate back to home page")
  
});