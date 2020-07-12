import typescript from 'rollup-plugin-typescript2';
import resolve from "rollup-plugin-node-resolve";
import builtins from "@joseph184/rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import pkg from "./package.json";

let override = { compilerOptions: { declaration: false } };

export default [
    {
        input: "./src/index.ts",
        plugins: [
            globals(),
            builtins(),
            typescript({tsconfigOverride: override}),
        ],
        external: [
            "fs",
            "dotenv"
        ],
        output: [
            {
                file: pkg.module,
                format: "es"
            },
            {
                file: pkg.main,
                name: "main",
                format: "umd"
            }
        ]
    }
]
