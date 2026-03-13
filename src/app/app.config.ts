import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideCloudinaryLoader } from '@angular/common';

import { routes } from '@app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideCloudinaryLoader('https://res.cloudinary.com/da1lxmeng'),
  ],
};
