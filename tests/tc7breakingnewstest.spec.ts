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
  // Click on Breaking News button
   await session.tap({
    element: {
      attributes: {
        text: 'Breaking News'
      }
    }
  });

   // verify Something has gone wrong message
  await expect(session).toHaveElement({
    attributes: {
      text: "Something has gone wrong",
      class: "android.widget.TextView"
    }
  });

   // Click on Breaking News button
   await session.tap({
    element: {
      attributes: {
        text: "Confirm",
        class: "android.widget.TextView"
      }
    }
  });
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
  console.log(" Handled the error alert after clicking breaking new button successfully")
});