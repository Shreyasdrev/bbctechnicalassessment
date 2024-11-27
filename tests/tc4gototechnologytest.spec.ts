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
  await session.tap({
    element: {
      attributes: {
        text: "Go to Technology "
      }
    }
  });
  // verify if Technology page header is displayed
  await expect(session).toHaveElement({
    attributes: {
      text: "Technology",
      class: "android.widget.TextView"
    }
  });
  await session.tap({
    element: {
      attributes: {
        class: "android.widget.Button"
      }
    }
  });
  // check if Breaking News button is displayed
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
  console.log(" Verified that selecting the 'Go to Technology' link navigates the user to the correct content page and navigate back to home page")
});