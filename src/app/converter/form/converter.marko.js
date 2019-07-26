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
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><link rel=\"shortcut icon\" href=\"/static/images/favicon.png\" type=\"image/x-icon\"><link rel=\"stylesheet\" href=\"/static/css/reset.css\"><link rel=\"stylesheet\" href=\"/static/css/principal.css\"><title>Binary to Decimal</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1 class=\"main-title\">Convert Binary to Decimal</h1><main class=\"main-content\"><form action=\"/binary-to-decimal/convert\" method=\"POST\"><div class=\"binary-input\"><label for=\"binary\">Binary: </label><input alt=\"Binary\" type=\"number\" name=\"binary\" id=\"binary\" required autofocus><input class=\"button-submit\" type=\"submit\" value=\"Compile!\"></div>");

  if (data.converter.message) {
    out.w("<div class=\"user-message-notification show-and-hiding\" id=\"messageView\">" +
      marko_escapeXml(data.converter.message) +
      "</div><div class=\"decimal-response show-and-hiding\" id=\"decimal-number\"><p><strong>" +
      marko_escapeXml(data.converter.output) +
      "</strong></p></div>");
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
