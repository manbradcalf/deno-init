import { Command, EnumType } from "../deps.ts";
import { act } from "../act.ts";
import { settings } from "../settings.ts";
import { selectTemplate } from "../utils.ts";

export const httpServerTemplate = new EnumType(["deno_http", "drash", "oak"]);

/**
 * `deno-init server` --> prompts template select mode.
 *
 * `deno-init server --template oak` --> creates project with the provided template.
 */
export const server = new Command()
  .name("server")
  .description(
    "Initialize an HTTP Server.",
  )
  .type("template", httpServerTemplate)
  .option<{ template: typeof httpServerTemplate }>(
    "-t, --template [method:template]",
    "Initialize the HTTP server from a template.",
  )
  .action(async ({ editor, force, name, template }) => {
    settings.force = force;
    settings.path = name ?? ".";
    settings.template = (template) ??
      await selectTemplate(httpServerTemplate.values());
    settings.editor = editor;

    await act();
  });
