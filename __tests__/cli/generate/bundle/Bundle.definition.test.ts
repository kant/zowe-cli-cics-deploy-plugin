/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
* Copyright IBM Corp, 2019
*
*/

import * as fs from "fs";
import { Imperative } from "@brightside/imperative";

describe("bundle definition", () => {
    it("should match the snapshot", () => {

        // Attempt to read the full file contents. We could require the module here, however there is normally non
        // deterministic data (filepaths, etc.) that are resolved when the module is loaded, so it is simpler to
        // check the contents for changes (sanity/protection agaisnt undesired changes to the definition)
        let contents: string;
        let error;
        try {
            contents = fs.readFileSync(__dirname + "/../../../../src/cli/generate/bundle/Bundle.definition.ts").toString();
        } catch (e) {
            error = e;
            Imperative.console.error(`Error reading Bundle.definition.ts Did you move the file? Details: ${e.message}`);
        }
        expect(error).toBeUndefined();
        expect(contents).toMatchSnapshot();
    });
});
