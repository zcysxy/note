---
publish: true
title: rvest
created: 2022-10-13T21:54:22
modified: 2022-10-13T22:20:21
published: 2026-05-09T18:10:23.219-04:00
tags:
  - pub-edav
aliases:
type: note
dg-publish: true
sup:
  - "[[R Package]]"
state: done
---

# rvest

- `robotstxt::paths_allowed(url)` checks if a page is reachable

- `read_html(url)` gets the content of the [[HTML]] page, returns a [[XML]] object

- `html_table()` get the tables out of a fetched HTML page, returns a [[R Data Structure#List]] of tibbles (dataframes)
  - Process a table: `mytable %>% filter(X1 == "Version:") %>% pull(X2)`

- `html_elements()` get specific elements, returns a list
  - `html_elements(x, "h2")`
  - `html_elements(x, "#current_visitors")`
  - `html_elements(x, ".data")`

- `html_element()` works like `html_elements()`, except that it returns a single node

- `html_text()` get the text out of nodes

- rvest doesn't work with dynamically loaded content
  - Download the loaded page as a local file
  - Use another package `RSelenium`
