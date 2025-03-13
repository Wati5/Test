"use server";

import { computeCartTotal, computeLineSubtotal } from "@/hooks/use-cart";
import { CartData } from "@/types";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export async function createOrder(cart: CartData) {
  await prisma.order.create({
    data: {
      total: computeCartTotal(cart.lines),
      userId: "1",
      lines: {
        create: cart.lines.map((line) => ({
          productId: line.product.id,
          qty: line.qty,
          subtotal: computeLineSubtotal(line),
        })),
      },
    },
  });

  revalidatePath('/mon-compte');
}
