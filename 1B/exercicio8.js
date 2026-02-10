print("\n8. Contagem inteligente (funciona em qualquer situação):")
inicio = int(input("Digite o primeiro Valor: "))
fim = int(input("Digite o último Valor: "))
incremento = int(input("Digite o incremento: "))

# Ajusta o incremento se necessário
if inicio > fim:
    if incremento > 0:
        incremento = -incremento
elif incremento < 0:
    incremento = abs(incremento)

if incremento == 0:
    incremento = 1

print("Contagem: ", end='')
if inicio <= fim:
    for i in range(inicio, fim + 1, incremento):
        print(i, end=' ')
else:
    for i in range(inicio, fim - 1, incremento):
        print(i, end=' ')
print("Acabou!")
