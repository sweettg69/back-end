print("\n14. Maior e menor preço:")
precos = []

for i in range(1, 9):
    preco = float(input(f"Digite o preço do {i}º produto: R$ "))
    precos.append(preco)

print(f"Maior preço: R$ {max(precos):.2f}")
print(f"Menor preço: R$ {min(precos):.2f}")
