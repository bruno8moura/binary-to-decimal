// Compiled using marko@4.18.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/binarytodecimalnumber$1.0.0/src/app/converter/form/converter.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><link rel=\"shortcut icon\" href=\"/static/images/favicon.png\" type=\"image/x-icon\"><link rel=\"stylesheet\" href=\"/static/css/reset.css\"><link rel=\"stylesheet\" href=\"/static/css/principal.css\"><title>Binary to Decimal</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1 class=\"main-title\">Convert Binary to Decimal</h1><main class=\"main-content\">");

  if (data.converter.message) {
    out.w("<div class=\"user-message-notification\" id=\"messageView\">" +
      marko_escapeXml(data.converter.message) +
      "</div>");
  }

  out.w("<form action=\"/convert\" method=\"POST\"><div><label for=\"binarynumber\">Binary Number: </label><input alt=\"Binary Number\" type=\"number\" name=\"binarynumber\" id=\"binarynumber\" required autofocus><input type=\"submit\" value=\"Compile!\"></div>");

  if (data.converter.output != null) {
    out.w("<div id=\"decimal-number\"><label for=\"result\">Result: </label><input type=\"text\" id=\"result\" readonly" +
      marko_attr("value", "" + data.converter.output) +
      "></div>");
  }

  out.w("</form></main> <footer class=\"page-footer\">Bruno Moura 2019&COPY;</footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/binarytodecimalnumber$1.0.0/src/app/converter/form/converter.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
