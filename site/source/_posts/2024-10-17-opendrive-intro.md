---
layout: post
title: openDrive介绍
date: 2024-10-17 22:10:00
categories: [地图]
tags: [openDrive]
---

### 1. openDrive 1.6介绍

ASAM OpenDRIVE描述了驾驶仿真应用所需的静态道路交通网络（以下简称路网）并提供了标准交换格式说明文档。该标准的主要任务是对道路及道路上的物体进行描述。OpenDRIVE说明文档涵盖对如道路、车道、交叉路口等内容进行建模的描述，但该说明文档中并不包含动态内容。

OpenDRIVE格式使用文件拓展名为xodr的可扩展标记语言（XML）作为描述路网的基础。存储在OpenDRIVE文件中的数据描述了道路的几何形状以及可影响路网逻辑的相关特征(features)，例如车道和标志。OpenDRIVE中描述的路网可以是人工生成或来自于真实世界的。OpenDRIVE的主要目的是提供可用于仿真的路网描述，并使这些路网描述之间可以进行交换。

https://www.asam.net/index.php?eID=dumpFile&t=f&f=3768&token=66f6524fbfcdb16cfb89aae7b6ad6c82cfc2c7f2#_foreword_%E5%89%8D%E8%A8%80https://www.asam.net/index.php?eID=dumpFile&t=f&f=3768&token=66f6524fbfcdb16cfb89aae7b6ad6c82cfc2c7f2#_foreword_%E5%89%8D%E8%A8%80
