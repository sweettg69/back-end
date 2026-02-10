print("\n13. Sorteio de 20 números:")
import random

numeros = []
acima_5 = 0
divisiveis_3 = 0

for _ in range(20):
    num = random.randint(0, 10)
    numeros.append(num)
    
    if num > 5:
        acima_5 += 1
    if num % 3 == 0 and num != 0:
        divisiveis_3 += 1

print(f"a) Números sorteados: {numeros}")
print(f"b) Acima de 5: {acima_5}")
print(f"c) Divisíveis por 3: {divisiveis_3}")
