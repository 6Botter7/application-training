import {initialize} from "./../../packages/crs-framework/packages/crs-process-api/crs-process-api.js";
import "./../../packages/crs-framework/packages/crs-process-api/action-systems/string-actions.js";
import "./../../legacy/pragma-views/lib/process-api/action-systems/flags.js";
import "./../../packages/crs-canvas/src/crs-canvas.js";
import "./../../packages/crs-framework/packages/crs-schema/crs-schema.js"

crs.process.fetch = async (step) =>
{
    if(step.args.location === "local") {
        const response = await import(`./../../lib/process-api/lib/${step.args.schema}/${step.args.schema}.js`);
        return response.schema;
    }
    else {
        const templateResponse = await crs.call("templates", "getInflated", {
            template: step.args.schema,
            customizationId: step.args.customizationId
        });
        const result = templateResponse.inflatedTemplate;
        if (result.variables?.translations != null) {
            result[step.action].translations = result.variables.translations;
            result[step.action].prefixes = {};
            result[step.action].prefixes["$translations"] = "$process.translations";
        }
        return result;
    }
};

async function setup() {
    const processApiRoot = `./../../packages/crs-framework/packages/crs-process-api`;
    const url = "./../../";

    await initialize(processApiRoot);

    //crs-framework actions
    await crs.modules.add("markdown_viewer", `${url}packages/crs-framework/components/markdown/markdown-viewer/markdown-viewer-actions.js`);
    await crs.modules.add("data_processing", `${url}packages/crs-framework/packages/crs-data-processing/crs-data-processing-actions.js`);
    await crs.modules.add("context_menu", `${url}packages/crs-framework/components/context-menu/context-menu-actions.js`);
}

await setup();
