print("\n5. Contagem até um valor informado:")
valor = int(input("Digite um valor: "))
print(f"Contagem: ", end='')
for i in range(1, valor + 1):
    print(i, end=' ')
print("Acabou!")
