import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAccordion extends Schema.Component {
  collectionName: 'components_components_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.accordion': ComponentsAccordion;
    }
  }
}
