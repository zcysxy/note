---
publish: true
title: Matlab CLI
created: 2022-04-01T23:06:47
modified: 2022-04-01T23:06:55
published: 2026-05-01T00:08:26.000-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# Matlab CLI

## Options

## Usage

### Exit When Figure is Closed

- Use `waitfor` to hold the execution when the figure window is open.

```shell
matlab -r "f=figure;fplot(@sin);waitfor(f);exit"
```

### Trim Whitespaces Before Execution

- I don't know why MATLAB CLI cannot parse statements with new lines.
  If your script contains new lines, you may need to trim all the new lines to make MATLAB CLI parse it correctly

```shell
$ SCRIPT="f=figure;
fplot(@sin);
waitfor(f);
exit"
$ TRIMMED_SCRIPT="$(echo "${SCRIPT}" | tr -d '[:space:]')"
$ matlab -nodesktop -nosplash -r "${TRIMMED_SCRIPT}"
```

- Remember to add `;` to each line if you trim all the new lines.
