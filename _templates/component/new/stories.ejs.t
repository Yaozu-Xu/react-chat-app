---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from "react";
import <%= name %> from ".";

export default {
  title: "<%= name %>",
  component: <%= name %>
};

export const Default = () => <<%= name %>>Default</<%= name %>>;