import pyautogui
import time

# 1. Abre o menu iniciar e o Chrome
pyautogui.hotkey('win')
time.sleep(1)             # 1 segundo é suficiente para o menu abrir
pyautogui.write('Aplicativos:google chrome') # 'write' é mais moderno que 'typewrite'
time.sleep(2) 
pyautogui.press('enter')
time.sleep(10)             # Tempo para o Chrome carregar a janela

# 2. Primeiro link (Jira)
pyautogui.write('https://open.spotify.com/intl-pt/')
time.sleep(1)
pyautogui.press('enter')
time.sleep(3)             

pyautogui.hotkey('win')
time.sleep(1)             # 1 segundo é suficiente para o menu abrir
pyautogui.write('Aplicativos:obsidian') # 'write' é mais moderno que 'typewrite'
time.sleep(2) 
pyautogui.press('enter')
