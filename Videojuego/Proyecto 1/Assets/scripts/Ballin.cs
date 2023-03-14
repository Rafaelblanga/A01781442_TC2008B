/*
this script detects when the ball enters the basket and adds points to the score
Rafael Blanga Hanono 2023-03-01
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ballin : MonoBehaviour
{
    [SerializeField] Score scoreObj;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Detect two elements colliding
    void OnTriggerEnter2D()
    {
        scoreObj.AddPoints(1);
        
    }
}
