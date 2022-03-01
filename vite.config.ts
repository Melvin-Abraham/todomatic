import { defineConfig, AliasOptions } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import * as tsconfig from './tsconfig.json';

// @src: https://github.com/Melvin-Abraham/Google-Assistant-Unofficial-Desktop-Client/blob/next/vite.config.ts#L9
// Resolve path aliases from `tsconfig.json`
const tsconfigAliases = tsconfig.compilerOptions.paths;
const aliasOptions: AliasOptions = {};

Object.entries(tsconfigAliases).forEach((aliasEntry) => {
  const [_alias, paths] = aliasEntry;

  // Strip glob from the end of path
  // Ex: "path/*" -> "path"

  const pathEndGlobRegex = /[/*]*$/;
  const alias = _alias.replace(pathEndGlobRegex, '');
  const resolutionPath = resolve(
    __dirname,
    paths[0].replace(pathEndGlobRegex, ''),
  );

  aliasOptions[alias] = resolutionPath;
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasOptions,
  },
  base: '/todomatic/',
});
