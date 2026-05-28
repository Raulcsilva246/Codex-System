#Inicializacao automativa Versão: 1.0.0

import pyautogui
import time

# 1. Abre o menu iniciar e o Chrome
pyautogui.hotkey('win')
time.sleep(1)             # 1 segundo é suficiente para o menu abrir
pyautogui.write('Aplicativos:google chrome') # 'write' é mais moderno que 'typewrite'
time.sleep(5) 
pyautogui.press('enter')
time.sleep(10)             # Tempo para o Chrome carregar a janela

# 2. Primeiro link (Jira)
pyautogui.write('https://valeti.atlassian.net/jira/dashboards/10212')
time.sleep(1)
pyautogui.press('enter')
time.sleep(3)             # Espera 2 segundos antes de abrir a próxima aba

# 3. Segundo link (Portal Valeti)
pyautogui.hotkey('ctrl', 't') 
time.sleep(1)           # Meio segundo para a aba abrir
pyautogui.write('https://portal.valeti.com/') 
time.sleep(1)       
pyautogui.press('enter')      
time.sleep(3)

# 4. Terceiro link (chat gpt)
pyautogui.hotkey('ctrl', 't') 
time.sleep(1)
pyautogui.write('https://chatgpt.com/')        
pyautogui.press('enter')

time.sleep(5)

# 4. Terceiro link (chat gpt)
pyautogui.hotkey('ctrl', 't') 
time.sleep(1)
pyautogui.write('https://app.tallos.com.br/app/chat')        
pyautogui.press('enter')

time.sleep(5)

pyautogui.hotkey('win')
time.sleep(5)             # 1 segundo é suficiente para o menu abrir
pyautogui.write('Aplicativos:google chrome') # 'write' é mais moderno que 'typewrite'
time.sleep(5) 
pyautogui.press('enter')
time.sleep(10)             # Tempo para o Chrome carregar a janela

#abrir gmail

pyautogui.write('https://mail.google.com/mail/u/0/#inbox') 
time.sleep(1)       
pyautogui.press('enter')

#abrir google agendas
pyautogui.hotkey('ctrl', 't')
time.sleep(1)
pyautogui.write('https://calendar.google.com/calendar/')  
time.sleep(1)      
pyautogui.press('enter')

#abrir whatsapp
pyautogui.hotkey('ctrl', 't') 
time.sleep(1)
pyautogui.write('https://web.whatsapp.com/') 
time.sleep(1)       
pyautogui.press('enter')

time.sleep(5)

pyautogui.hotkey('win')
time.sleep(5)             # 1 segundo é suficiente para o menu abrir
pyautogui.write('Aplicativos: slack') # 'write' é mais moderno que 'typewrite'
time.sleep(5) 
pyautogui.press('enter')
time.sleep(10) 