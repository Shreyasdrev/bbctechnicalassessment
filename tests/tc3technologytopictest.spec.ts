import { test, expect } from '@appetize/playwright';
import playwright from "playwright";
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: "allure-playwright",
});


test.only("Home Page Test", async ({ session }) => {
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
  // Click on Technology topic
  await session.tap({
    element: {
      attributes: {
        text: 'Technology'
      }
    }
  });
  // verify if "Go to Technology" link name updated
  const txt = await session.findElement({
    attributes: {
      text: "Go to Technology "
    }
  });
  // verify if "Go to Technology" link name updated
  await expect(session).toHaveElement({
    attributes: {
      "text": "Go to Technology ",
      "class": "android.widget.TextView"
    }
  });
  console.log(" Verified the user can pick the Technology topic from the Topic picker and that the 'Go to Technology' link name changes accordingly")
});