---
publish: true
title: Matlab Characters and Strings
created: 2022-02-22T20:20:09
modified: 2022-05-07T20:53:27
published: 2026-05-01T00:08:26.000-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Types]]"
state: done
source: https://www.mathworks.com/help/matlab/characters-and-strings.html
---

# Characters and Strings

字符 [[Matlab Types - Character|character]] 和字符串 string 都是储存文本的数据类型, string 在 R2016b 版本中引入

## 储存方式不同

- Character 可类比数值类型中的数值, 每个字符严格为 2 bytes, size 为字符个数
- String 可类比数值数组整体, 占据内存远大于包含相同字符的 character, size 为 1

![20210124163250](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210124163250.png)

## 创建方式不同

- Character 用单引号 `''` 创建
- String 用双引号 `""`, 或函数 _string_ 创建

## 处理方法不同

作为不同的类, character 和 string 有不同的处理方法, 适应于它们的数据特性. 如想知道字符串的长度, character 可用函数 _length_, 而 string 需用函数 _strlength_
