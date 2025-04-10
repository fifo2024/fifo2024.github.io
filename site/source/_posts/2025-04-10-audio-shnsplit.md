---
layout: post
title: 使用shnsplit对专辑cue进行单曲切割
date: 2025-04-10 14:30:00
categories: [音视频]
tags: [audio, shnsplit, cue, ape, wav, flac]
---

## 使用shnsplit（推荐）

### 需要安装shntool和cuetools，支持自动解析CUE文件：

- 安装工具（Linux/macOS）

  - Debian/Ubuntu

    ```shell
    sudo apt install shntool cuetools flac
    ```

  - macOS (Homebrew)  

    ``` shell
     brew install shntool cuetools
    ```

- 执行拆分

  ```shell
  shnsplit -f input.cue -o wav -t "%n - %t" input.wav
  ```

- 参数说明
  -f input.cue：指定CUE文件
  -o wav：输出格式为wav，也可以支持flac
  -t "%n - %t"：文件名格式（编号 - 标题）

- ape格式操作

  - 首先使用ffmpeg将ape转为wav，然后使用上面方法切割

  ``` shell
  ffmpeg -i input.ape output.wav
  ```

## 推荐

- [FFmpeg](https://github.com/FFmpeg/FFmpeg)

- [知否](http://fifo2024.github.io/audio-shnsplit)