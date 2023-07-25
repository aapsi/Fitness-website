//  the reason this is ts not tsx is because we are gonna use this file
//  or type in multiple files

// enums does exist in the build and run time
export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }