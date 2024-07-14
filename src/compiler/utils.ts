import Config from "../../svelte.config";

export function getBasePath() {
    return Config.kit?.paths?.base || "";
}
