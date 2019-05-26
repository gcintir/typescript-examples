# typescript-examples
Typescript code examples

## Compile the project

```
$ git clone https://github.com/gcintir/typescript-examples.git
$ cd typescript-examples
$ tsc
```

There is a `tsconfig.json` file in the root directory which is responsible for the compiler options.

As it is set the default target is Ecmascript5 now.

Any additional options come here.

Output is generated under /dist directory.

To compile only one ts file, use the following command.

```
$ cd design_patterns_in_typescript/source
$ tsc Practice1.ts
```

## Execute the project

After the compilation of the project in source folder
Executing the file is:

```
node Practice1.js
```