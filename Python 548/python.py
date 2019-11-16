import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import matplotlib as mpl
import seaborn as sns

df = pd.read_csv('cereal.csv', sep=';')
#print(df.columns) #1
#print(df.shape) #2
#print(ratings.head(7)) #3


# scatterplot 
# plt.title('Fat vs Calories', fontsize=20)
# sns.regplot(df["calories"], df["fat"], ci=None, fit_reg=False)
# plt.show()

#swarmplot
sns.regplot(df["calories"], df["fat"], ci=None, fit_reg=False);
sns.swarmplot(x="fat", y="calories", data=df);
plt.show()

#barchart
# cals = df.sort_values(by=['calories'], ascending=True)
# cals2Display = cals.tail()
# #top7 = top7.set_index('name')
#
# sns.set_color_codes("pastel")
# sns.barplot(x="calories", y="name", data=cals2Display, label="Total", color="b")
#
# plt.title('Cereal Calories', fontsize=14)
# #plt.xticks(rotation=60)
#
# plt.tight_layout()
# #plt.xlim((60,100))
# plt.show()
