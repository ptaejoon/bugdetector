import tensorflow as tf
import numpy as np
from tensorflow import keras
from tensorflow.keras import layers
import pandas as pd
def load_data()
    xtr = 0
    ytr = 0
    xte = 0
    yte = 0
    return xtr,ytr,xte,yte
    

inputs = layers.Input(shape=(None,))
#you need to change this later
input_size = (3,1)
#you need to change this later

(x_train, y_train), (x_test,y_test) = load_data()

model = keras.Sequential()
model.add(layers.Embedding(input_dim = 1000, output_dim = 64))
model.add(layers.LSTM(128))
model.add(layers.Dense(10))
model.summary()
model.compile() #need to change internal parameters

model.fit()
model.predict()
output = lstm(inputs)


