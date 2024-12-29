---
slug: SARDET-100K
title:  SARDET-100K数据集
authors: [seekyou]
tags: [Note,seekyou,SARDET]
---
记录一下最近准备用于比赛的数据集：SARDET-100K

# SARDet-100K

<!-- truncate -->
文献来源：[论文地址](https://arxiv.org/abs/2403.06534)  
仓库地址：[GitHub](https://github.com/zcablii/SARDet_100K)

作者：李宇轩，李翔*，李玮杰，侯淇彬，刘丽，程明明，杨健*

数据集下载链接我放在[CSDN的博客](https://blog.csdn.net/qq_57906525/article/details/140043441?spm=1001.2014.3001.5502)中了（免费）
## 基本特点

- 融合了一共十种开源可用的高质量数据集，并按照8:1:1的比例划分训练集，验证集，测试集。
- 保安一共116598张图片和245653个实例，包含飞机，船舶，港口，汽车，桥梁，坦克一共六个类别。
- 将各种类型的数据集统一重新切片并且转换注释格式为COCO格式。

## 论文提要

### 摘要

合成孔径雷达（SAR）目标检测因其不可替代的全天候成像能力近年来受到广泛关注。然而，该研究领域面临着有限的公共数据集和无法访问的源代码。为了应对这些挑战，该团队建立了一个新的基准数据集和一种用于大规模 SAR 物体检测的开源方法。该团队的数据集 SARDet-100K 是对 10 个现有 SAR 检测数据集进行大量调查、收集和标准化的结果，为研究目的提供了大规模且多样化的数据集。该团队基于该数据集进行了全面的实验，发现了 SAR 目标检测的一个关键挑战：RGB 数据集的预训练和 SAR 数据集的微调在数据域和模型结构方面存在巨大差异。为了弥补这些差距，该团队提出了一种新颖的多阶段过滤器增强（MSFA）预训练框架，该框架从数据输入、域转换和模型迁移的角度解决了问题。所提出的 MSFA 方法显着增强了 SAR 目标检测模型的性能，同时在不同模型中展示了卓越的通用性和灵活性。

### 本文的贡献

- 引入第一个用于 SAR 多类别目标检测的 COCO 级大规模数据集。
- 发现了 SAR 目标检测传统模型预训练和微调方法中的关键差距。
- 提出了带有滤波器增强（MSFA）的多阶段预训练框架，该框架在各种深度网络模型中表现出显着的有效性以及出色的通用性和灵活性。
- 通过发布与我们研究相关的数据集和代码，建立 SAR 物体检测的新基准。

## SARDet_100K数据集

目前现存的SAR数据集相对有限，低分辨率的数据集往往局限于宏观视图上的场景分类，高分辨率的数据集虽能更好描述例如船，车这类的小目标，但是获取条件苛刻，且往往缺乏多样性（例如波段，偏振，分辨率等方面）。

而该团队提出的SARDet_100K融合的十种数据集不仅各类参数多样化，没有冲突的对象类别，数据来源也不同。下图为数据集预览：

[![OEKDmb.md.png](https://ooo.0x0.ooo/2024/12/28/OEKDmb.md.png)](https://img.tg/image/OEKDmb)

数据集相关信息如下：

[![OEK4bP.png](https://ooo.0x0.ooo/2024/12/28/OEK4bP.png)](https://img.tg/image/OEK4bP)

下图数据集标准化流程，包括了数据集划分，大图像切片和标签注释格式统一。

[![OEKR26.md.png](https://ooo.0x0.ooo/2024/12/28/OEKR26.md.png)](https://img.tg/image/OEKR26)

（下面为笔者仅针对训练集进行的简单数据分析，可能有所偏差，仅供参考。）

![OEKP4F.png](https://ooo.0x0.ooo/2024/12/28/OEKP4F.png)

## MSFA 
(Multi-Stage with Filter Augmentation Pretraining Framework)——滤波增强的多阶段预训练框架

目前近期的研究主要依赖于默认的ImageNet预训练方法提出网络设计等提高SAR目标检测的性能，而忽略了从用于预训练的自然数据集和用于微调的SAR数据集之间的显著域差异，以及主干网络和整个检测框架之间的模型差异。

该团队提出的MSFA预训练框架则从数据输入，域转换以及模型迁移三个角度解决这些问题。MSFA包含两个核心设计：

- 滤波增强输入
- 多级预训练框架

### 滤波增强输入

本文采用一些手工制作的滤波算子，例如HOG，Canny，Haar，WST，GRE等，将原本输入与相应滤波变换后的数据串联作为新的输入。这样通过把数据从像素空间投射到滤波增强特征空间，从而显著减少自然RGB图像和SAR图像之间的域差异。如下图4(a)所示：

![OEKJiD.png](https://ooo.0x0.ooo/2024/12/28/OEKJiD.png)

### 多级预训练框架

在传统的预训练模式中：

预训练阶段首先在 ImageNet（IN）数据集上随机初始化并训练骨干网络 ，然后在 SAR 数据集上使用预训练好的的检测模型进行微调。如下列公式：

[![OEKm3I.png](https://ooo.0x0.ooo/2024/12/28/OEKm3I.png)](https://img.tg/image/OEKm3I)

本文提出的方法相当于是在第一步完成后添加了一步：用大规模遥感数据集作为域迁移的检测预训练，该数据集域下游SAR数据集也有着相似的对象形状，大小。如上图图4(b)所示，这种方式在自然RGB图像在ImageNet上的光学分别和SAR上的目标分布间搭起了一座桥梁。

公式也变成了：

[![OEKgQ1.png](https://ooo.0x0.ooo/2024/12/28/OEKgQ1.png)](https://img.tg/image/OEKgQ1)

### MSFA

MSFA融合以上两者后的框架与传统方法的框架对比如下所示：

[![OEKrbq.png](https://ooo.0x0.ooo/2024/12/28/OEKrbq.png)](https://img.tg/image/OEKrbq)

## 实验分析

下图主要是添加不同滤波增强输入算子后的mAP比较以及ImageNet 和 SARDet-100k 在 RGB 和手工特征空间上的皮尔逊相关系数 (PCC)。

可以发现：自然图像与SAR图像之间的域差异较大，但是经过滤波增强后的图像域差异显著减小。

[![OEKAgc.png](https://ooo.0x0.ooo/2024/12/28/OEKAgc.png)](https://img.tg/image/OEKAgc)

可以看出WST不仅缩小域差异的特点以及提取多尺度信息的能力产生了出色的性能，也能看出单纯算子的叠加并不能提供实质有效的额外信息。

[![OEKKVr.png](https://ooo.0x0.ooo/2024/12/28/OEKKVr.png)](https://img.tg/image/OEKKVr)

上图为不同预训练策略的效果显示。

为了对其有效性和普遍性进行评估，该团队使用各种检测器和骨干网络上进行了丰富的实验，如下图所示，验证了该方法具有相当广泛的适用性和显著的有效性。

[![OEKyrG.png](https://ooo.0x0.ooo/2024/12/28/OEKyrG.png)](https://img.tg/image/OEKyrG)

最后是MSFA与以前的SOTA方法比对。如下图所示，该文提出的方法明显优于之前所有的方法，在SSDD数据集的mAP@50指标达到了97.9%，在HRSID上达到了83.7%。

[![OEKvqM.png](https://ooo.0x0.ooo/2024/12/28/OEKvqM.png)](https://img.tg/image/OEKvqM)


## 局限性

- 考虑到存在大量无注释的SAR数据集（例如最经典的MSTAR，FARAD等等），可以尝试探索半监督，弱监督或者无监督的方法。
- 本文的设计方向偏向简单实用，通用性高，但未深入讨论设计细节。可以尝试引入更复杂专业的设计提高性能。

## 杂谈

目前有关SAR图像目标检测的大型数据集实在是少之又少，该团队所搭建的这一数据集——SARDet 100K确实是第一个大规模 SAR 物体检测数据集，其大小甚至可以与广泛使用的 COCO数据集（118K张 图像）相当，解决该领域了缺少数据集的痛点。该团队在主要工作包括：提出了一种新的SAR目标检测数据集基准；在数据输入上采用手工特征描述算子WST等；在域转换上采用了一种分层预训练方法等。

## 参考文献

1. Li, Yuxuan, Xiang Li, Weijie Li, Qibin Hou, Li Liu, Ming-Ming Cheng, and Jian Yang. "SARDet-100K: Towards Open-Source Benchmark and ToolKit for Large-Scale SAR Object Detection." arXiv preprint arXiv:2403.06534, 2024.
2. Deng, Jia, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, and Li Fei-Fei. "Imagenet: A large-scale hierarchical image database." In CVPR, 2009.
3. Lin, Tsung-Yi, Michael Maire, Serge Belongie, James Hays, Pietro Perona, Deva Ramanan, Piotr Dollár, and C. Lawrence Zitnick. "Microsoft coco: Common objects in context." In ECCV, 2014.
4. Xia, G.S., Bai, X., Ding, J., Zhu, Z., Belongie, S., Luo, J., Datcu, M., Pelillo, M.Zhang, L.: DOTA: A large-scale dataset for object detection in aerial images. In CVPR, 2018.

