# UsersApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## User table feature
## User Story
    As an administrator I want to have access to the list of users existing in the system, containing general information for each user (name, last name, phone, email, registration date). For an easy access to concrete user record I’d like to have filtering functionality by all fields and sorting for each of them. I’d like to have the ability to scroll the full list of users, without necessity to navigate through different pages.
    I would like the ability to check the detailed information for each user.

## Requirements
    An application displaying the list of users existing in the database should be implemented.
1.1. Each record in the list should include the following information:

    Name - string.
    Last name - string.
    Phone - string.
    Email - string.
    Registration date - date in user’s browser locale.
1.1.1. The list should have header displaying each field name.
1.2. Each record in the list should support hover state.

    Background color transfer to 10% darker.
    Cursor pointer.
1.3. Click on the record should navigate to the page with detailed user information.
1.4. List component should provide the ability to demonstrate the full list of existing users.

    To prevent performance issues users should be uploaded to the list in batches.
    Consider infinite scrolling feature.
1.5. The application should provide the ability to perform filtering the list of users.

    Filtering should be performed across the all existing in the system users, not only shown on the page currently.
    Date filtering should be performed as is, no need to stick to user’s locale.
    String filtering is performed by the part of the word.
1.6. Sorting ability by each field should be supported field.

    Default order - ascending.
    Non functional requirements
2.1. The application should provide smooth scrolling experience even on 100000 records.

    Consider virtual scrolling feature.