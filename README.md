# init

[![Build](https://github.com/GJZwiers/deno-init/actions/workflows/build.yaml/badge.svg)](https://github.com/GJZwiers/deno-init/actions/workflows/build.yaml)
[![Coverage Status](https://coveralls.io/repos/github/GJZwiers/deno-init/badge.svg?branch=main)](https://coveralls.io/github/GJZwiers/deno-init?branch=main)
![Deno](https://img.shields.io/static/v1?label=&message=init&color=lightblue&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAB41BMVEUAAAAAAAABAQECAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycpKSkqKiorKyssLCwuLi4wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0%2BPj4%2FPz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJkZGRlZWVmZmZnZ2doaGhqampra2tsbGxtbW1wcHBxcXF0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx%2Bfn5%2Ff3%2BAgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4%2BQkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5%2BgoKChoaGioqKjo6OkpKSlpaWmpqaoqKipqamqqqqrq6u6nz8EAAAAAXRSTlMAQObYZgAAAu1JREFUeNqt0wOXJMkewNH%2FHbttjW3btm3btm175pu%2Bt7uVp7I7u9b7O0rdVETEf9OFCe2BTtOvxV9ok0y7%2FgSMAoxeD9eSnT8AqwCM2QMBsPL3BIqmAIMOQXQAUBBcBldgsqazEF2NB7jTWiwBHkCovQtRLKBjP2zLitWAe%2FBN9WuTxvtcIaDshp6sbSlOAtyH9zqG9Ye8rBZQdN2prpl3%2B0kb4KFRy7wgzDnuYb0B3NTlpn3laE7odxH4ZORhnwkTL3g4FG5od9Kuai3MWLp91Bc%2B6n3ZBMKQmzq3t4qbsK0WZuYJvYSA59qchlCyBb4nZGsdiKR6fggf4HgFEIA3CdlSD4YlBCGcbsS6yS3JZ27B5gYgJzbgq9fWTkVV5inl3IaNjcC65CH7fcCo7Qp2m33WJ0RCrnuNHpcAC%2B58j3i6AeAmn6xtMi1P9nLU0VK8hT6R1h485Z3VPQU4ExENTOk%2FbTI%2BMDRatAM68M7Knr6C4RGBTvO778EK9flnJB0C3lv2G%2BmIHLHGVe35EJURzzQ3M8AXi3v6TKRkvRM%2BSVbEhWgeWGJRLz%2F4mJKe9qgXhfoILOptKu9SwlIWRsGAUTXwJiU1FrOtMDkg7VVKlltJrygcAO2ep6SpYTWu%2Fxnp8CRHSmFWzyENPU2IfMfaa026PaBfRKyH6QbainYbLz5%2BdGQ8SvJ6DIDSmxxM7mIKFqAzQKRtBVBxjUiI8YDtQ7EBx1JyFUDNhYTMxCjTwfBpWIwZKfkB2KHnJslx9DQDgHmojzTAbZ2IXB1gCgBzIdLoCFdQEbm%2BwmSAdoZ3y5J5cI70aBmaqgG7tWufJQvhPE2RD2YBlrcjSxZBHZF2Br2xChP6ZUmJBcCDaNZsYDtqBmbJQAvBumhRf7ANZMl486FfZGqE3QXJPHMxOFo1A0vsrGlNdihSeM2egjHjWpNxuBaFK0NboEv%2B4FKUxe%2F2GkBtbn8p%2BBZ%2F2GCZRsSf92ZhB4COiz%2FFf9H%2FAb6oexxnpBFzAAAAAElFTkSuQmCC)
[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/init)

`deno-init` is a simple command line tool to initialize new Deno projects from
templates or through prompts.

> Please note this module's API is not stable yet and there may be breaking
> changes on `0.x` version increments.

## Quickstart

```bash
deno install --allow-read --allow-run --allow-write --unstable -n deno-init https://deno.land/x/init@0.15.4/mod.ts

deno-init -y -m -n awesome_deno_project 
```

## Table of Contents

- [Installation](#installation)
- [Permissions](#permissions)
- [Basic Usage](#basic-usage)
- [Options](#options)
- [Subcommands](#subcommands)
- [Contributing](#contributing)

## Installation

First install `deno` and make sure it is available on a terminal. `git` is also
recommended though not required.

Next, run the `deno install` command below to install the executable:

<details open>
<summary>deno.land</summary>
<p>

```bash
deno install --allow-read --allow-run --allow-write --unstable -n deno-init https://deno.land/x/init@0.15.4/mod.ts
```

</p>
</details>

<details>
<summary>nest.land</summary>
<p>

```bash
deno install --allow-read --allow-run --allow-write --unstable -n deno-init https://x.nest.land/init@0.15.4/mod.ts
```

</p>
</details>

<details>
<summary>github</summary>
<p>

```bash
deno install --allow-read --allow-run --allow-write --unstable -n deno-init https://raw.githubusercontent.com/GJZwiers/deno-init/main/mod.ts
```

</p>
</details>

Note you can name the program anything you like by changing the `-n` value.

If you already have a previous installation and would like to upgrade, run the
command with the new version number and include the `-f` flag.

## Permissions

The program needs the following permissions to run:

- `read`: to load files that are used to initialize projects from templates
- `run`: to run `git init` if the git option is true
- `write`: to make files in order to initialize new projects
- `unstable`: to allow the use of unstable APIs. These mostly come from the
  module's external dependencies.

## Basic Usage

```bash
deno-init
```

This will prompt you for the following:

- Use TypeScript? (default `y`)
- Set entrypoint: (default `mod.ts`)
- Set dependency entrypoint: (default `deps.ts`)
- Set dev dependency entrypoint: (default `dev_deps.ts`)
- Add import map? (default `n`)

Choosing all defaults will create the following structure in the current
directory:

```
.
│   .gitignore
│   deps.ts
|   dev_deps.ts
│   mod.ts
```

If you choose to init with an import map an `import_map.json` file is added to
the above. If `git` is installed on the machine then `git init` is run as well.

Note that `deno-init` will not overwrite files or directories unless the
`--force` option is used explicitly. This means the program can 'fill in the
blanks' in a project where not all of the files above are present yet.

## Options

`--help` will print helpful information to the terminal.

`--yes` or `-y` will initialize the project with all the defaults, skipping the
prompts:

```bash
deno-init --yes
```

`--name` or `-n` will initialize the project in a new directory in the current
working directory:

```bash
deno-init --name awesome_deno_project
```

`--map` or `-m` will add an (empty) `import_map.json` file to the project:

```bash
deno-init --map
```

`--cache` or `-c` will run `deno cache` on dependencies in
`deps.ts` and `dev_deps.ts` after all of the project's files have been made:

```bash
deno-init --cache
```

`--force` or `-f` will allow the progam to overwrite existing files. This can be
helpful to re-initialize but use with caution.

```bash
deno-init --force
```

`--no-git` disables running `git init` as part of the project initialization.

```bash
deno-init --no-git
```

## Subcommands

Use `--help` with any of the subcommands to get more detailed information.

The `deno-init` subcommands will create a new project from a chosen template,
which can be specified with `--template` or `-t`. If `--template` is omitted you
will be prompted to choose one from a list of available choices.

### `api`

Use to initialize a Deno RESTful API from a template.

```bash
deno-init api --template opine
```

Available templates: `opine`, `restful_oak`.

### `cli`

Use to initialize a Deno Command Line Interface (CLI) from a template.

```bash
deno-init cli --template cliffy
```

Available templates: `cliffy`.

### `server`

Use to initialize a Deno HTTP server from a template.

```bash
deno-init server --template oak
```

Available templates: `deno_http`, `drash`, `oak`.

### `tdd`

Use to initialize a Deno Test-Driven Development project from a template.

```bash
deno-init tdd --template rhum
```

Available templates: `deno_testing`, `rhum`.

## Contributing

TBD
