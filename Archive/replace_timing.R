# replace timing info in behavioral files
library(tidyverse)
data = read.table('~/Documents/code/sanlab/ROC/ROC_R1beh_old.txt', sep="\t", stringsAsFactors = FALSE)
data1 = data %>% mutate(V4 = ifelse(V4 == '4', '2.5', V4),
                        V5 = ifelse(V5 == '4', '2.5', V5))
write.table(data1, '~/Documents/code/sanlab/ROC/ROC_R1beh.txt', sep="\t", quote = FALSE, col.names = FALSE, row.names = FALSE)

rm(data, data1)

data = read.table('~/Documents/code/sanlab/ROC/ROC_R2beh_old.txt', sep="\t", stringsAsFactors = FALSE)
data1 = data %>% mutate(V4 = ifelse(V4 == '4', '2.5', V4),
                        V5 = ifelse(V5 == '4', '2.5', V5))
write.table(data1, '~/Documents/code/sanlab/ROC/ROC_R2beh.txt', sep="\t", quote = FALSE, col.names = FALSE, row.names = FALSE)
