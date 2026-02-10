print("\n7. Contagem com intervalo personalizado:")
inicio = int(input("Digite o primeiro Valor: "))
fim = int(input("Digite o último Valor: "))
incremento = int(input("Digite o incremento: "))

print("Contagem: ", end='')
for i in range(inicio, fim + 1, incremento):
    print(i, end=' ')
print("Acabou!")
